/**
 * Hero Story 3D — vanilla port of the prototype's scene-3d.tsx + hero-scroll.tsx.
 * Deps: three (via importmap), GSAP + ScrollTrigger (UMD globals, deferred).
 */
import * as THREE from 'three';
import { GLTFLoader } from './GLTFLoader.js';
import { DRACOLoader } from './DRACOLoader.js';

const initialized = new WeakSet();

function whenGsapReady(cb, tries = 0) {
  if (window.gsap && window.ScrollTrigger) return cb();
  if (tries > 200) return console.warn('[hero-3d] GSAP not available');
  setTimeout(() => whenGsapReady(cb, tries + 1), 25);
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

function initScene(root, progress) {
  const wrap = root.querySelector('[data-hero-canvas]');
  const loaderEl = root.querySelector('[data-hero-loader]');
  const loaderBar = root.querySelector('[data-hero-loader-bar]');
  const loaderLabel = root.querySelector('[data-hero-loader-label]');

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(wrap.clientWidth, wrap.clientHeight);
  renderer.shadowMap.enabled = true;
  wrap.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    wrap.clientWidth / wrap.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0.4, 4.2);

  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(5, 8, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xbfdbfe, 1.1);
  rim.position.set(-6, 3, -5);
  scene.add(rim);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xc5cfe0, 0.5));

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(6, 64),
    new THREE.ShadowMaterial({ opacity: 0.12 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.15;
  ground.receiveShadow = true;
  scene.add(ground);

  const group = new THREE.Group();
  scene.add(group);

  const manager = new THREE.LoadingManager();
  manager.onProgress = (_url, loaded, total) => {
    const pct = total ? Math.round((loaded / total) * 100) : 0;
    if (loaderBar) loaderBar.style.width = pct + '%';
    if (loaderLabel) loaderLabel.textContent = 'LOADING ASSET — ' + pct + '%';
  };
  manager.onLoad = () => loaderEl && loaderEl.classList.add('is-done');
  manager.onError = () => loaderEl && loaderEl.classList.add('is-done');

  const draco = new DRACOLoader(manager);
  draco.setDecoderPath(root.dataset.dracoPath);
  const loader = new GLTFLoader(manager);
  loader.setDRACOLoader(draco);

  loader.load(root.dataset.modelUrl, (gltf) => {
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.0 / maxDim;
    model.scale.setScalar(scale);
    const center = box.getCenter(new THREE.Vector3()).multiplyScalar(scale);
    model.position.sub(center);
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    group.add(model);
  });

  // Chapter pose zones — must match the GSAP timeline zones below
  function poseFor(p) {
    if (p < 0.15) return { x: 0, y: 0, rx: 0.05, z: 0 };
    if (p < 0.35) return { x: 0.9, y: -0.05, rx: 0.1, z: 0.1 };
    if (p < 0.55) return { x: 0.9, y: 0.05, rx: 0.3, z: 0.25 };
    if (p < 0.75) return { x: 0.9, y: 0.15, rx: -0.12, z: 0.15 };
    return { x: 0.9, y: 0, rx: 0.05, z: 0.3 };
  }

  const clock = new THREE.Clock();
  let rafId = 0;
  function tick() {
    const delta = clock.getDelta();
    group.rotation.y += delta * 0.25;
    const t = poseFor(progress.value);
    group.position.x = THREE.MathUtils.lerp(group.position.x, t.x, 0.06);
    group.position.y = THREE.MathUtils.lerp(group.position.y, t.y, 0.06);
    group.position.z = THREE.MathUtils.lerp(group.position.z, t.z, 0.06);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, t.rx, 0.06);
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);
  }
  tick();

  function onResize() {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
    wrap.innerHTML = '';
  };
}

function initTimeline(root, progress) {
  const gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);

  const headline = root.querySelector('[data-hero-headline]');
  const sub = root.querySelector('[data-hero-sub]');
  const hint = root.querySelector('[data-hero-hint]');
  const chaptersWrap = root.querySelector('[data-hero-chapters]');
  const chapters = Array.from(root.querySelectorAll('[data-chapter]'));
  const scrollLength = parseInt(root.dataset.scrollLength, 10) || 4500;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: 'top top',
      end: '+=' + scrollLength,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        progress.value = self.progress;
      },
    },
  });

  // 0.00 – 0.15 : intro decay — headline parks top-left as a ghost label
  tl.to(
    headline,
    {
      scale: 0.34,
      y: -280,
      x: () => -Math.max(0, window.innerWidth / 2 - 320),
      color: '#94a3b8',
      opacity: 0.55,
      ease: 'power2.inOut',
    },
    0
  );
  tl.to(sub, { opacity: 0, y: -40, ease: 'power2.in' }, 0);
  tl.to(hint, { opacity: 0 }, 0);
  tl.to(chaptersWrap, { opacity: 1, y: 0, ease: 'power2.out' }, 0.1);

  const CHAPTER_LEN = 0.2;
  const INTRO = 0.15;

  chapters.forEach((chapter, i) => {
    const zoneStart = INTRO + i * CHAPTER_LEN;
    const num = chapter.querySelector('[data-chapter-num]');
    const title = chapter.querySelector('[data-chapter-title]');
    const body = chapter.querySelector('[data-chapter-body]');

    tl.to(body, { opacity: 1, height: 'auto', ease: 'power2.out' }, zoneStart);
    tl.to(num, { backgroundColor: '#ffffff', scale: 1.05, color: '#0a1220' }, zoneStart);
    tl.to(title, { fontSize: '1.375rem', fontWeight: 700, color: '#0a1220' }, zoneStart);

    if (i > 0) {
      const prev = chapters[i - 1];
      tl.to(
        prev.querySelector('[data-chapter-body]'),
        { opacity: 0, height: 0, ease: 'power2.in' },
        zoneStart
      );
      tl.to(
        prev.querySelector('[data-chapter-num]'),
        { backgroundColor: 'rgba(255,255,255,0)', scale: 1, color: '#475569' },
        zoneStart
      );
      tl.to(
        prev.querySelector('[data-chapter-title]'),
        { fontSize: '1rem', fontWeight: 500, color: '#475569' },
        zoneStart
      );
    }
  });

  return () => {
    tl.scrollTrigger && tl.scrollTrigger.kill();
    tl.kill();
  };
}

function initHero(root) {
  if (initialized.has(root)) return;
  initialized.add(root);

  const use3d =
    root.dataset.enable3d === 'true' && supportsWebGL() && !prefersReducedMotion();

  if (!use3d || prefersReducedMotion()) {
    root.classList.add('is-static');
    if (!use3d) return;
  }

  const progress = { value: 0 };
  const teardowns = [];

  teardowns.push(initScene(root, progress));
  whenGsapReady(() => {
    if (!prefersReducedMotion()) teardowns.push(initTimeline(root, progress));
  });

  root._heroTeardown = () => teardowns.forEach((fn) => fn && fn());
}

function boot() {
  document.querySelectorAll('[data-hero-story]').forEach(initHero);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

// Theme editor: re-init when the section is re-rendered
document.addEventListener('shopify:section:load', (e) => {
  const root = e.target.querySelector('[data-hero-story]');
  if (root) initHero(root);
});
document.addEventListener('shopify:section:unload', (e) => {
  const root = e.target.querySelector('[data-hero-story]');
  if (root && root._heroTeardown) root._heroTeardown();
});

import type Lenis from "lenis";

/** Shared handle to the page-level Lenis instance so overlays/modals
 *  can pause smooth-scroll hijacking and let their own scroll work. */
export const lenisRef: { current: Lenis | null } = { current: null };

import type { CrossfadeParams, TransitionConfig } from "svelte/transition";
export interface ITodo {
  done: boolean;
  text: string;
}

export type MyAnimation = (
  node: Element,
  params: CrossfadeParams & { key: any },
) => () => TransitionConfig;

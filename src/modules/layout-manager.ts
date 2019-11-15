import { Test1, Test2 } from "@/panels/test";
import { AssetManager } from "@/panels/asset-manager";

export namespace LayoutManager {
  export let panels: Record<string, any> = {};
  export function registerPanel(name: string, cmp: any) {
    panels[name] = cmp;
  }

  export interface LayoutState {
    kind: "v" | "h";
    weights: number[];
    children: (string | LayoutState)[];
  }

  export let layoutState: LayoutState | string = {
    kind: "h",
    weights: [50, 50],
    children: [
      "asset-manager",
      {
        kind: "v",
        weights: [50, 50],
        children: ["test2", "test1"]
      }
    ]
  };
}

LayoutManager.registerPanel("test1", Test1);
LayoutManager.registerPanel("test2", Test2);
LayoutManager.registerPanel("asset-manager", AssetManager);
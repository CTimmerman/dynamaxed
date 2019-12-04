import { ViewManager } from "@/modules/view-manager";
import * as tsx from "vue-tsx-support";
import { CreateElement, RenderContext, VNode } from "vue";
import { Menubar } from "@/components/menubar";
import { Navbar } from "@/components/navbar";
import { stylesheet } from "typestyle";

export const MainView = tsx.componentFactory.create({
  functional: true,
  render(
    createElement: CreateElement,
    context: RenderContext<any>
  ): VNode | VNode[] {
    const Content = ViewManager.activeView.component;

    return [
      <div class={styles.menusplit}>
        <Menubar />
        <div class={styles.navsplit}>
          <Navbar />
          <div class={styles.content}>
            <Content />
          </div>
        </div>
      </div>

      /*<div>
        <Button>Click me outside!</Button>
        <TextInput />
        <Splitter>
          <Button>In Splitter</Button>
          <TextInput />
        </Splitter>
      </div>*/

      /*,

      <Toolbar />,
      <v-content>
        <Content />
      </v-content>*/
    ];
  }
});

const styles = stylesheet({
  navsplit: {
    display: "flex",
    height: "100%"
  },
  menusplit: {
    display: "flex",
    height: "100%",
    flexDirection: "column"
  },
  content: {
    margin: "15px auto 0",
    height: "calc(100% - 15px)",
    overflow: "auto"
  }
});

// @Component({
//   name: "MainView"
// })
// export default class MainView extends Vue {
//   render() {
//     const Content = ViewManager.activeView;
//
//     return (
//       <div id="mainView">
//         <Toolbar />
//         {/*<div id="main-wrapper">*/}
//         {/*  <Navbar />*/}
//         {/*  <div id="content">*/}
//         {/*    <Content />*/}
//         {/*  </div>*/}
//         {/*</div>*/}
//       </div>
//     );
//   }
// }

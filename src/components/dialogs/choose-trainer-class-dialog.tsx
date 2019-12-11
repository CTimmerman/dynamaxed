import { Component } from "vue-property-decorator";
import { Dialog } from "@/modules/dialog-manager";
import { stylesheet } from "typestyle";
import { TrainerClassList } from "@/components/lists/trainer-class-list";

@Component
export class ChooseTrainerClassDialog extends Dialog<string, string> {
  render() {
    return (
      <div class={styles.dialog}>
        <TrainerClassList
          onentryclick={(e: string) => this.accept(e)}
          class={styles.tableWrapper}
        />
      </div>
    );
  }
}

const styles = stylesheet({
  tableWrapper: {
    overflow: "auto",
    height: "100%"
  },
  dialog: {
    maxHeight: "calc(100% - 62px)",
    boxSizing: "border-box"
  }
});

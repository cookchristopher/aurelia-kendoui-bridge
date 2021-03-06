export class Checkboxes {
    constructor() {
      this.data = [{
        id: 1, text: 'My Documents', expanded: true, spriteCssClass: 'rootfolder', items: [
          {
            id: 2, text: 'Kendo UI Project', expanded: true, spriteCssClass: 'folder', items: [
                        { id: 3, text: 'about.html', spriteCssClass: 'html' },
                        { id: 4, text: 'index.html', spriteCssClass: 'html' },
                        { id: 5, text: 'logo.png', spriteCssClass: 'image' }
            ]
          },
          {
            id: 6, text: 'New Web Site', expanded: true, spriteCssClass: 'folder', items: [
                        { id: 7, text: 'mockup.jpg', spriteCssClass: 'image' },
                        { id: 8, text: 'Research.pdf', spriteCssClass: 'pdf' }
            ]
          },
          {
            id: 9, text: 'Reports', expanded: true, spriteCssClass: 'folder', items: [
                        { id: 10, text: 'February.pdf', spriteCssClass: 'pdf' },
                        { id: 11, text: 'March.pdf', spriteCssClass: 'pdf' },
                        { id: 12, text: 'April.pdf', spriteCssClass: 'pdf' }
            ]
          }
        ]
      }];
    }

    // function that gathers IDs of checked nodes
    checkedNodeIds(nodes, checkedNodes) {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].checked) {
          checkedNodes.push(nodes[i].id);
        }

        if (nodes[i].hasChildren) {
          this.checkedNodeIds(nodes[i].children.view(), checkedNodes);
        }
      }
    }

    // show checked node IDs on datasource change
    onCheck() {
      let checkedNodes = [];
      let message;

      this.checkedNodeIds(this.treeview.dataSource.view(), checkedNodes);

      if (checkedNodes.length > 0) {
        message = 'IDs of checked nodes: ' + checkedNodes.join(',');
      } else {
        message = 'No nodes checked.';
      }

      this.logger.log(message);
    }
}

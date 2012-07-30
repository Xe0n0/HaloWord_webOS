enyo.kind({
  name: "MyApps.HaloWord",
  kind: enyo.VFlexBox,
  events: { 
      onLinkClick: "",
      onSelect: " "
  },
  create: function() {
    this.inherited(arguments);
    this.results = ["喵", "miaow", "caesium", "love", "dysprosium", "turf", "Iridium", "daisy", "Chrome", "Capella"];
    legacy_init(this.results);
    console.log(this.results);
  },
 components: [
    {kind: "PageHeader", content: "Halo Word"},
    {kind: "RowGroup", caption: "Feed URL", components: [
          {
            kind: "InputBox", components: [
            {
              name: "word", kind: "Input", flex: 1, 
              value: "Hello"
            },
            {kind: "Button", caption: "Query", onclick: "query"}
            ]
          }]
    },
     
      
    {kind: "Scroller", capation:"Bookmark", flex: 1, components: [
        {name: "list", kind: "VirtualRepeater", onSetupRow: "getListItem",
          components: [
            {kind: "Item", layoutKind: "VFlexLayout", components: [
                // {name: "title", kind: "Divider"},
                {name: "description"},
            ],
            onclick: "listItemClick"
          }
          ]
        }
        ]
    }
      
    
    ],
  query: function() {
    word = this.$.word.getValue();
    location.hash = word;
    show_def(word);
  },
  getListItem: function(inSender, inIndex) {
    var r = this.results[inIndex];
    if (r) {
      // this.$.title.setCaption(r);
      this.$.description.setContent(r);
      return true;
    }
  },
  listItemClick: function(inSender, inEvent) {
      var feed = this.results[inEvent.rowIndex];
      this.doSelect(feed);
  }
});
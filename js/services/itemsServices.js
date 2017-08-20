app.factory("itemsServices",function () {
    return{

        addItems:function (name) {
            var newItem = {
                id : this.items.length+1,
                name : name,
                comments : []
            }
            this.items.push(newItem);
            this.saveItems();
            newItem = new Object();
        },

        getItems:function () {
            if(!localStorage.getItem("items")){
                localStorage.setItem("items", JSON.stringify(this.items));
            }else{
                localStorage.getItem("items");

                debugger;
                this.items = JSON.parse(localStorage.getItem("items"));
            }
            return this.items;

        },
        saveItems : function () {
            localStorage.setItem("items", JSON.stringify(this.items));
        },

        deleteItems: function (id) {
            for(var x=0;x<=this.items.length;x++){
                if(id==this.items[x].id){
                    this.items.splice(x,1)
                    this.saveItems();
                    return
                }
            }

        },
        addComent : function(comment, currentItem){
            var newComment = {};
            newComment.names="anonym";
            newComment.message=comment;
            currentItem.comments.push(newComment)
            newComment=new Object();
            this.saveItems();
        },
        items:[
            {
                name:"First item with custom name",
                id: 0,
                comments:[
                    {
                        names:"fist name",
                        message:"first comment "

                    },
                    {
                        names:"second name",
                        message:"second comment"
                    }
                ]
            },
            {
                name:"second item",
                id: 1,
                comments:[
                    {
                        names:"fist name",
                        message:"first comment"
                    },
                    {
                        names:"second name",
                        message:"second comments"
                    },
                    {
                        names:"third cooments",
                        message:"third momments"
                    }
                ]
            },
            {
                name:"third item",
                id : 2,
                comments:[
                    {
                        names:"fist name",
                        message:"first comment"
                    },
                    {
                        names:"second name",
                        message:"second comments"
                    }
                ]

            }
        ]


    }

debugger;


})
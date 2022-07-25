 const treeObject = [

    {
        id: 1,
        parent: 0,
        name: 'styles.css',
        isFolder: false,
        content: ".header {\n    background: linear-gradient(90.01deg, #2A8BF2 0.01%, #0A6CD6 99.99%);\n    height: 70px;\n    display: flex;\n    align-items: center;\n}\n\n.header__wrapper {\n    max-width: 1560px;\n    margin-left:350px;\n    width: 100%;\n    padding: 20px 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header__avatar-icon {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    margin-right: 20px;\n}\n'",
        // content: "let treeObjRef = document.querySelector('.ChatMainList_Group') \nlet newElement = document.createElement(div);",
        description: "test desc File2 файл 2 описание",
        isActive: false
    },
    {
        id: 7,
        parent: 0,
        name: 'some_File3.doc',
        isFolder: false,
        content: "File3 : 333 333 333\nlet newElement = document.createElement(div);\n <div class=header__icon-settings_delete></div>",
        description: "test desc file 3333 рабочие материалы",
        isActive: false
    },
	{
        id: 105,
        parent: 0,
        name: 'template4.doc',
        isFolder: false,
        content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        isActive: false
    },
    {
        id: 2,
        parent: 0,
        name: 'folder2_дочерние файлы',
        description: "это папка folder#2",
        isFolder: true,
        isActive: false,
        isFolderExpanded: false

    },
	
    {
        id: 106,
        parent: 0,
        name: 'project6',
        description: "это папка Folder#5",
        isFolder: true,
        children: [],
        isActive: false,
        isFolderExpanded: false
    },
	{
        id: 107,
        parent: 106,
        name: 'project6-text.doc',
        isFolder: false,
        content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        isActive: false
    },
	{
        id: 108,
        parent: 106,
        name: 'project6-documents.doc',
        isFolder: false,
        content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        isActive: false
    },
	{
        id: 109,
        parent: 106,
        name: 'project6-notes.doc',
        isFolder: false,
        content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        isActive: false
    },
    {
        id: 4,
        parent: 2,
        name: 'TestFile',
        description: "test desc",
        isFolder: false,
        content: "1111111111",
        isActive: false
    },
    {
        id: 5,
        parent: 2,
        name: 'TestFile2',
        description: "test desc",
        isFolder: false,
        content: "2222222222222",
        isActive: false
    },
    {
        id: 6,
        parent: 2,
        name: 'TestFile3',
        description: "test desc",
        isFolder: false,
        content: "33333333",
        isActive: false
    },
    {
        id: 101,
        parent: 2,
        name: 'folder6_inner',
        description: "это папка Folder#6 inner",
        isFolder: true,
        children: [],
        isActive: false,
        isFolderExpanded: false
    },
    {
        id: 102,
        parent: 101,
        name: 'TestFile Folder 6 inner',
        description: "test desc",
        isFolder: false,
        content: "",
        isActive: false
    },
];


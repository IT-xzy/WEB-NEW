angular.module("myApp")
    .constant("companyOption", [{
            name: "全部",
            id: undefined
        },
        {
            name: "移动互联网",
            id: 0
        },
        {
            name: "电子商务",
            id: 1
        },
        {
            name: "企业服务",
            id: 2
        },
        {
            name: "O2O",
            id: 3
        },
        {
            name: "教育",
            id: 4
        },
        {
            name: "金融",
            id: 5
        },
        {
            name: "游戏",
            id: 6
        }
    ])
    .constant("rowOption", [{
            name: "认证状态",
            child: [{
                    name: "全部",
                    id: undefined
                },
                {
                    name: "未认证",
                    id: 0
                },
                {
                    name: "已认证",
                    id: 1
                },
            ],
        },
        {
            name: "冻结状态",
            child: [{
                    name: "全部",
                    id: undefined
                },
                {
                    name: "正常",
                    id: 0
                },
                {
                    name: "冻结",
                    id: 1
                },
            ],
        },
        {
            name: "融资规模",
            child: [{
                    name: "全部",
                    id: undefined,
                },
                {
                    name: "无需融资",
                    id: 0,
                },
                {
                    name: "天使轮",
                    id: 1,
                },
                {
                    name: "A轮",
                    id: 2,
                },
                {
                    name: "B轮",
                    id: 3,
                },
                {
                    name: "C轮",
                    id: 4,
                },
                {
                    name: "D轮及以上",
                    id: 5,
                },
                {
                    name: "上市公司",
                    id: 6,
                },
            ],
        },
    ])
    .constant("typeOption", [{
            name: "全部",
            id: undefined
        },
        {
            name: "首页Banner",
            id: 0
        },
        {
            name: "找职位Banner",
            id: 1
        },
        {
            name: "找精英Banner",
            id: 2
        },
        {
            name: "行业大图",
            id: 3
        },
    ])
    .constant("statusOption", [{
            name: "全部",
            id: undefined
        },
        {
            name: "上线",
            id: 2
        },
        {
            name: "草稿",
            id: 1
        },
    ])
    .constant("sidebar", [{
            // show: false,
            father: "信息管理",
            child: [{
                    name: "公司列表",
                    link: "list.companyList"
                },
                {
                    name: "职位列表",
                    link: "list"
                }
            ],
        },
        {
            // show: false,
            father: "Article管理",
            child: [{
                    name: "Article列表",
                    link: "list.article"
                },
                {
                    name: "文章管理",
                    link: "list"
                },
                {
                    name: "文章管理",
                    link: "list"
                }
            ]
        },
        {
            // show: false,
            father: "用户管理",
            child: [{
                name: "用户列表",
                link: "list.welcome"
            }]
        }
    ])   
    .constant('onOff', {
        "offLine": 1, //草稿
        "onLine": 2 //上线
    })
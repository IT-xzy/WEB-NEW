angular.module("myApp")
    .constant("companyOption", [{
            name: "全部",
            value: null
        },
        {
            name: "移动互联网",
            value: 0
        },
        {
            name: "电子商务",
            value: 1
        },
        {
            name: "企业服务",
            value: 2
        },
        {
            name: "O2O",
            value: 3
        },
        {
            name: "教育",
            value: 4
        },
        {
            name: "金融",
            value: 5
        },
        {
            name: "游戏",
            value: 6
        }
    ])
    .constant("rowOption", [{
            name: "认证状态",
            child: [{
                    name: "全部",
                    value: null
                },
                {
                    name: "未认证",
                    value: 0
                },
                {
                    name: "已认证",
                    value: 1
                },
            ],
        },
        {
            name: "冻结状态",
            child: [{
                    name: "全部",
                    value: null
                },
                {
                    name: "正常",
                    value: 0
                },
                {
                    name: "冻结",
                    value: 1
                },
            ],
        },
        {
            name: "融资规模",
            child: [{
                    name: "全部",
                    value: null,
                },
                {
                    name: "无需融资",
                    value: 0,
                },
                {
                    name: "天使轮",
                    value: 1,
                },
                {
                    name: "A轮",
                    value: 2,
                },
                {
                    name: "B轮",
                    value: 3,
                },
                {
                    name: "C轮",
                    value: 4,
                },
                {
                    name: "D轮及以上",
                    value: 5,
                },
                {
                    name: "上市公司",
                    value: 6,
                },
            ],
        },
    ])
    .constant("typeOption", [{
            name: "全部",
            value: null
        },
        {
            name: "首页Banner",
            value: 0
        },
        {
            name: "找职位Banner",
            value: 1
        },
        {
            name: "找精英Banner",
            value: 2
        },
        {
            name: "行业大图",
            value: 3
        },
    ])
    .constant("statusOption", [{
            name: "全部",
            value: null
        },
        {
            name: "上线",
            value: 2
        },
        {
            name: "草稿",
            value: 1
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
    ])    .constant("all", null)
    .constant('onOff', {
        "offLine": 1, //下线
        "onLine": 2 //上线
    })
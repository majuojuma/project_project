const List = {
    Person : [
        {label:'Person dashboard' , path: '/pers'},
        {label:'View event' , path:'/event'},
        {label:'View respond', path:'/response'},
        {label:'Post event',path:'/post'}
    ],

    Admin :[
        {label:'Admin Dashbod' ,  path: '/admin'},
        {label:'Add user' , path: '/add'},
        {label:'Manage event',path:'/event-manager'},
        {label:'Generate report',path:'/admin'},
        {label:'View event',path:'/event'},
        {label:'Setting',path:'/setting'}
    ],

    Officer:[
        {label:'Officer Dashboad',path:'officer'},
        {label:'View event',path:'view'},
        {label:'View location',path:'event'},
        {label:'Sent response',path:'sendresp'}
    ],

    Sheha :[
        {label:'Sheha Dashboad',path:'var'},
        {label:'View event',path:'event'},
        {label:'Varify event',path:'var'}
    ]

}

export default List;
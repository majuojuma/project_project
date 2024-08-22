const List = {
    Person : [
        {label:'Person dashboard' , path: '/statistic'},
        {label:'View event' , path:'/event'},
        {label:'View respond', path:'/response'},
        {label:'Post event',path:'/post'},
        {label: 'Logout', path:'/'}
    ],

    Admin :[
        {label:'Admin Dashbod' ,  path: '/statistic'},
        {label:'Add user' , path: '/add'},
        {label:'Manage event',path:'/event-manager'},
        {label:'Generate report',path:'/admin'},
        {label:'Admin Event',path:'/adminviews'},
        {label:'Setting',path:'/setting'},
        {label: 'Logout', path:'/'}
    ],

    officer:[
        {label:'Officer Dashboad',path:'/statistic'},
        {label:'View event',path:'/event-list'},
        // {label:'Sent response',path:'/officer-response'},
        {label: 'view response', path:'/viewresponse'},
        {label: 'Logout', path:'/'}
    ],

    Sheha :[
        {label:'Sheha Dashboad',path:'/viewsammary'},
        {label:'View event',path:'/eventview'},
        // {label:'Varify event',path:'/verifyevent/:eventId'},
        {label: 'Logout', path:'/'}
    ]

}

export default List;
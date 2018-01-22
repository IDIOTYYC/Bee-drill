module.exports = {
    url: '<insert your login page here>',
    credentials: {
        "emailOne": '"$where: (function(){var date = new Date(); do{curDate = new Date();}while(curDate-date<10000); return Math.max();})()"', //DoS NoSQL injection string
        "emailOnePass": '"$where: (function(){var date = new Date(); do{curDate = new Date();}while(curDate-date<10000); return Math.max();})()"',
    },
    test_one: {
        exp_title: '<expected error return>'
    },
}

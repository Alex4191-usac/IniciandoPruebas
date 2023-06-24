function searchEmail ( persons , email ) {
    for ( var i = 0 ; i < persons . length ; i ++) {
        if ( persons [ i ]. email === email ) {
            return persons [ i ];
        }
    }
    return null ;
}

module.exports = searchEmail;
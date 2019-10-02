/**
 * Return a unique identifier with the given `len`.
 *
 * @param {Number} length. Default is 8
 * @return {String}
 * @api private
 */
module.exports = function( length = 8 )
{
    let uid = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;

    for ( let i = 0; i < length; ++i )
    {
        uid += chars[ getRandomInt( 0, charsLength - 1 ) ];
    }

    return uid;
};

/**
 * Return a random int.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @api private
 */
function getRandomInt( min, max )
{
    return Math.floor(Math.random() * ( max - min + 1 ) ) + min;
}

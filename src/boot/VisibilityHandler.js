/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * The Visibility Handler is responsible for listening out for document level visibility change events.
 * This includes `visibilitychange` if the browser supports it, and blur and focus events. It then uses
 * the provided Event Emitter and fires the related events.
 *
 * @function Phaser.Boot.VisibilityHandler
 * @fires Phaser.Game#HiddenEvent
 * @fires Phaser.Game#VisibleEvent
 * @fires Phaser.Game#BlurEvent
 * @fires Phaser.Game#FocusEvent
 * @fires Phaser.Game#MouseoutEvent
 * @fires Phaser.Game#MouseoverEvent
 * @since 3.0.0
 *
 * @param {Phaser.Game} game - The Game instance this Visibility Handler is working on.
 */
var VisibilityHandler = function (game)
{
    var hiddenVar;
    var eventEmitter = game.events;

    if (document.hidden !== undefined)
    {
        hiddenVar = 'visibilitychange';
    }
    else
    {
        var vendors = [ 'webkit', 'moz', 'ms' ];

        vendors.forEach(function (prefix)
        {
            if (document[prefix + 'Hidden'] !== undefined)
            {
                document.hidden = function ()
                {
                    return document[prefix + 'Hidden'];
                };

                hiddenVar = prefix + 'visibilitychange';
            }

        });
    }

    var onChange = function (event)
    {
        if (document.hidden || event.type === 'pause')
        {
            eventEmitter.emit('hidden');
        }
        else
        {
            eventEmitter.emit('visible');
        }
    };

    if (hiddenVar)
    {
        document.addEventListener(hiddenVar, onChange, false);
    }

    window.onblur = function ()
    {
        eventEmitter.emit('blur');
    };

    window.onfocus = function ()
    {
        eventEmitter.emit('focus');
    };

    //  Automatically give the window focus unless config says otherwise
    if (window.focus && game.config.autoFocus)
    {
        window.focus();

        game.canvas.addEventListener('mousedown', function ()
        {
            window.focus();
        }, { passive: true });
    }

    if (game.canvas)
    {
        game.canvas.onmouseout = function ()
        {
            game.isOver = false;
            eventEmitter.emit('mouseout');
        };

        game.canvas.onmouseover = function ()
        {
            game.isOver = true;
            eventEmitter.emit('mouseover');
        };
    }
};

module.exports = VisibilityHandler;

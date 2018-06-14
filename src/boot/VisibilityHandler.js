/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * Visibility Handler hidden event.
 *
 * The document in which the Game is embedded has entered a hidden state.
 *
 * @xevent Phaser.Boot.VisibilityHandler#hidden
 */

/**
 * Visibility Handler visible event.
 *
 * The document in which the Game is embedded has entered a visible state.
 *
 * @xevent Phaser.Boot.VisibilityHandler#visible
 */

/**
 * Visibility Handler blur event.
 *
 * The window in which the Game is embedded has entered a blurred state.
 *
 * @xevent Phaser.Boot.VisibilityHandler#blur
 */

/**
 * Visibility Handler focus event.
 *
 * The window in which the Game is embedded has entered a focused state.
 *
 * @xevent Phaser.Boot.VisibilityHandler#focus
 */

/**
 * The Visibility Handler is responsible for listening out for document level visibility change events.
 * This includes `visibilitychange` if the browser supports it, and blur and focus events. It then uses
 * the provided Event Emitter and fires the related events.
 *
 * @function Phaser.Boot.VisibilityHandler
 * @xfires Phaser.Boot.VisibilityHandler#hidden
 * @xfires Phaser.Boot.VisibilityHandler#visible
 * @xfires Phaser.Boot.VisibilityHandler#blur
 * @xfires Phaser.Boot.VisibilityHandler#focus
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
            eventEmitter.xemit('hidden');
        }
        else
        {
            eventEmitter.xemit('visible');
        }
    };

    if (hiddenVar)
    {
        document.addEventListener(hiddenVar, onChange, false);
    }

    window.onblur = function ()
    {
        eventEmitter.xemit('blur');
    };

    window.onfocus = function ()
    {
        eventEmitter.xemit('focus');
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
            eventEmitter.xemit('mouseout');
        };

        game.canvas.onmouseover = function ()
        {
            game.isOver = true;
            eventEmitter.xemit('mouseover');
        };
    }
};

module.exports = VisibilityHandler;

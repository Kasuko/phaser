/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var EVENTS = {

    /**
     * Game ready event.
     *
     * This is an internal event that let's the game know when the DOM is ready.
     *
     * @event Phaser.Game.Events.Events#READY
     * @since 3.0.0
     */
    READY: 'ready',

    /**
     * Game boot event.
     *
     * This is an internal event dispatched when the game has finished booting, but before it is ready to start running.
     * The global systems use this event to know when to set themselves up, dispatching their own `ready` events as required.
     *
     * @event Phaser.Game.Events#BOOT
     * @since 3.0.0
     */
    BOOT: 'boot',

    /**
     * Game Pre-Step event.
     *
     * This event is dispatched before the main Step starts.
     * By this point none of the Scene updates have happened.
     * Hook into it from plugins or systems that need to update before the Scene Manager does.
     *
     * @event Phaser.Game.Events#PRESTEP
     * @since 3.8.0
     *
     * @param {number} time - [description]
     * @param {number} delta - [description]
     */
    PRESTEP: 'prestep',

    /**
     * Game Step event.
     *
     * This event is dispatched after Pre-Step and before the Scene Manager steps.
     * Hook into it from plugins or systems that need to update before the Scene Manager does, but after core Systems.
     *
     * @event Phaser.Game.Events#STEP
     * @since 3.8.0
     *
     * @param {number} time - [description]
     * @param {number} delta - [description]
     */
    STEP: 'step',

    /**
     * Game Post-Step event.
     *
     * This event is dispatched after the Scene Manager has updated.
     * Hook into it from plugins or systems that need to do things before the render starts.
     *
     * @event Phaser.Game.Events#POSTSTEP
     * @since 3.8.0
     *
     * @param {number} time - [description]
     * @param {number} delta - [description]
     */
    POSTSTEP: 'poststep',

    /**
     * Game Pre-Render event.
     *
     * This event is dispatched immediately before any of the Scenes have started to render.
     * The renderer will already have been initialized this frame, clearing itself and preparing to receive
     * the Scenes for rendering, but it won't have actually drawn anything yet.
     *
     * @event Phaser.Game.Events#PRERENDER
     * @since 3.0.0
     *
     * @param {(Phaser.Renderer.Canvas.CanvasRenderer|Phaser.Renderer.WebGL.WebGLRenderer)} renderer - A reference to the current renderer.
     */
    PRERENDER: 'prerender',

    /**
     * Game Post-Render event.
     *
     * This event is dispatched right at the end of the render process.
     * Every Scene will have rendered and drawn to the canvas.
     *
     * @event Phaser.Game.Events#POSTRENDER
     * @since 3.0.0
     *
     * @param {(Phaser.Renderer.Canvas.CanvasRenderer|Phaser.Renderer.WebGL.WebGLRenderer)} renderer - A reference to the current renderer.
     */
    POSTRENDER: 'postrender',

    /**
     * Game Pause event.
     *
     * This event is dispatched when the game loop enters a paused state, usually as a result of the Visibility Handler.
     *
     * @event Phaser.Game.Events#PAUSE
     * @since 3.0.0
     */
    PAUSE: 'pause',

    /**
     * Game Resume event.
     *
     * This event is dispatched when the game loop leaves a paused state and resumes running.
     *
     * @event Phaser.Game.Events#RESUME
     * @since 3.0.0
     */
    RESUME: 'resume',

    /**
     * Game Resize event.
     *
     * @event Phaser.Game.Events#RESIZE
     * @since 3.2.0
     *
     * @param {number} width - The new width of the Game.
     * @param {number} height - The new height of the Game.
     */
    RESIZE: 'resize',

    /**
     * Game Destroy event.
     *
     * @event Phaser.Game.Events#DESTROY
     * @since 3.0.0
     */
    DESTROY: 'destroy',

    /**
     * Game hidden event.
     *
     * The document in which the Game is embedded has entered a hidden state.
     *
     * @event Phaser.Game.Events#HIDDEN
     * @since 3.0.0
     */
    HIDDEN: 'hidden',

    /**
     * Game visible event.
     *
     * The document in which the Game is embedded has entered a visible state.
     *
     * @event Phaser.Game.Events#VISIBLE
     * @since 3.0.0
     */
    VISIBLE: 'visible',

    /**
     * Game blur event.
     *
     * The window in which the Game is embedded has entered a blurred state.
     *
     * @event Phaser.Game.Events#BLUR
     * @since 3.0.0
     */
    BLUR: 'blur',

    /**
     * Game focus event.
     *
     * The window in which the Game is embedded has entered a focused state.
     *
     * @event Phaser.Game.Events#FOCUS
     * @since 3.0.0
     */
    FOCUS: 'focus',

    /**
     * Game mouseout event.
     *
     * The window in which the Game is embedded has lost mouse focus.
     *
     * @event Phaser.Game.Events#MOUSEOUT
     * @since 3.10.0
     */
    MOUSEOUT: 'mouseout',

    /**
     * Game mouseover event.
     *
     * The window in which the Game is embedded has gained mouse focus.
     *
     * @event Phaser.Game.Events#MOUSEOVER
     * @since 3.10.0
     */
    MOUSEOVER: 'mouseover',
};

module.exports = EVENTS;

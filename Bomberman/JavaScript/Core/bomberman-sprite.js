 'use strict';

 class BombermanSprite extends Sprite {
     constructor(options) {
         super(options);

         this._sprites = [rightImg, downImg, leftImg, upImg];
     }

     updateSpritesheet(dir) {
         this._spriteSheet = this._sprites[dir];
     }
 }
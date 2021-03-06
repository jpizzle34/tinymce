/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import { ResizeWire } from '@ephox/snooker';
import { Css, Insert, Remove, SugarBody, SugarElement } from '@ephox/sugar';
import Editor from 'tinymce/core/api/Editor';

import * as Util from '../core/Util';

const createContainer = function () {
  const container = SugarElement.fromTag('div');

  Css.setAll(container, {
    position: 'static',
    height: '0',
    width: '0',
    padding: '0',
    margin: '0',
    border: '0'
  });

  Insert.append(SugarBody.body(), container);

  return container;
};

const get = function (editor: Editor, _container?) {
  return editor.inline ? ResizeWire.body(Util.getBody(editor), createContainer()) : ResizeWire.only(SugarElement.fromDom(editor.getDoc()));
};

const remove = function (editor: Editor, wire) {
  if (editor.inline) {
    Remove.remove(wire.parent());
  }
};

export {
  get,
  remove
};

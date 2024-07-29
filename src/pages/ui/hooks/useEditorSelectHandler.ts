import { onBeforeUnmount } from 'vue';

import type Core from '@tmagic/core';
import { Id, MContainer, MNode, MPage } from '@tmagic/schema';

const useEditorSelectHandler = <T>(params: { app: Core | undefined; id: Id; success: () => T; err: () => T }) => {
  const { app, id, success, err } = params;
  const editorSelectHandler = (
    info: {
      node: MNode;
      page: MPage;
      parent: MContainer;
    },
    path: MNode[],
  ) => {
    if (path.find((node: MNode) => node.id === id)) {
      success();
    } else {
      err();
    }
  };

  app?.page?.on('editor:select', editorSelectHandler);

  onBeforeUnmount(() => {
    app?.page?.off('editor:select', editorSelectHandler);
  });

  return {
    editorSelectHandler,
  };
};

export default useEditorSelectHandler;

import { fn } from '@storybook/test'

import Task from './Task.vue'

export const ActionsData = {
  onPinTask: fn(),
  onArchiveTask: fn()
}

// ドキュメント化するコンポーネントについてStorybookに伝えるために、デフォルトのエクスポートを作成
export default {
  component: Task,
  title: 'Tutorial/Task',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData
  }
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}

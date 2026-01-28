import { signalStore, withHooks, withState } from '@ngrx/signals';

export const tasksStore = signalStore(
  withState({}),
  withHooks({
    onInit() {
      console.log('tasksStore initialized');
    },
    onDestroy() {
      console.log('tasksStore destroyed');
    },
  }),
);

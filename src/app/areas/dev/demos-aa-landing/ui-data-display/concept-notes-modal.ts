import { Component, ChangeDetectionStrategy, input, model } from '@angular/core';

@Component({
  selector: 'app-demos-aa-concept-notes-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  template: `
    <dialog [id]="modalId()" class="modal" [class.modal-open]="isOpen()">
      <div class="modal-box max-w-3xl">
        <form method="dialog">
          <button
            (click)="close()"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>

        <h3 class="text-lg font-bold">{{ title() }}</h3>
        <div class="divider my-2"></div>

        <div class="prose max-w-none">
          <ng-content />
        </div>

        <div class="modal-action">
          <button (click)="close()" class="btn btn-primary">Got it!</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button (click)="close()" type="button">close</button>
      </form>
    </dialog>
  `,
  styles: ``,
})
export class ConceptNotesModal {
  modalId = input<string>('concept-notes-modal');
  title = input<string>('Concept Notes');
  isOpen = model<boolean>(false);

  close() {
    this.isOpen.set(false);
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { BasicCard } from '@ht/shared/ui-common/cards/basic-card';
import { CardGrid } from '@ht/shared/ui-common/layouts/card-grid';
import { EmBlock } from '@ht/shared/ui-common/typography/em-block';

@Component({
  selector: 'ht-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, BasicCard, CardGrid, EmBlock],
  template: `
    <app-ui-page title="Applied Angular Development">
      <app-ui-card-grid-layout>
        <app-ui-card-basic title="This Class">
          <p>
            This is our <em>starter project</em> for building Angular applications with best
            practices and modern tooling.
          </p>
          <p>
            The
            <a
              href="https://www.hypertheory.com/training/frontend/angular/angular"
              target="_blank"
              class="link link-primary"
              >Course Outline</a
            >
            is here.
          </p>
        </app-ui-card-basic>
        <app-ui-card-basic title="Course Materials">
          <p>
            The course materials, including additional resources with videos and documentation is at
            <a
              class="link link-primary"
              href="https://applied-angular.hypertheory.com/"
              target="_blank"
              rel="noopener noreferrer"
              >https://applied-angular.hypertheory.com/</a
            >.
          </p>
          <div class="alert alert-warning alert-soft border-l-4 border-l-warning">
            The content on this site, any the sites for my other classes will be moving soon. They
            will redirect to the new locations when ready.
          </div>
        </app-ui-card-basic>
        <app-ui-card-basic title="The Labs">
          <p>
            You will have two opportunities to <em>apply</em> what you've learned in this class
            through hands-on labs.
          </p>

          <app-ui-typography-em-block>
            <span em-block-title>Lab 1:</span>
            <span em-block-content
              >The first lab will be roughly 1/2 way through the course. It will be somewhat
              "scripted", with some step-by-step instructions, but each step will get progressively
              more challenging. You will have about 2-3 hours during class to do this lab. At the
              conclusion of the lab, we will review, and the instructor will "recreate" his version
              of doing this lab.</span
            >
          </app-ui-typography-em-block>

          <app-ui-typography-em-block>
            <span em-block-title>Lab 2:</span>
            <span em-block-content
              >This is the "Final Exam". You will have to provide to the instructor, through a pull
              request, your final work. There is no particular rubric or benchmark for you to
              accomplish - the labs are meant to be an opportunity for you to deepen your
              understanding of Angular with the assumption that each student will have a different
              starting point in their skills and experience. You will have about 2-3 hours during
              class to do this lab. At the conclusion of the lab, we will review, and the instructor
              will "recreate" his version of doing this lab.</span
            >
          </app-ui-typography-em-block>
        </app-ui-card-basic>
        <app-ui-card-basic title="Getting the Instructor's Code">
          <p>
            The instructor's code for the class is available at
            <a class="link link-primary" href="blah">Repo</a>
          </p>
          <div class="alert alert-warning alert-soft border-l-4 border-l-warning">
            The content on this site, any the sites for my other classes will be moving soon. They
            will redirect to the new locations when ready.
          </div>
        </app-ui-card-basic>
      </app-ui-card-grid-layout>
    </app-ui-page>
  `,
  styles: ``,
})
export class HomePage {}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalRef } from 'ngx-bootstrap';
import { mock, instance } from 'ts-mockito';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  const mocked = mock(BsModalRef);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent],
      providers: [
        { provide: BsModalRef, useValue: instance(mocked) }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

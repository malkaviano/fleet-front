import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { mock, instance } from 'ts-mockito';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const mockedToast = mock(ToastrService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        { provide: 'VEHICLE_URL', useValue: 'testeUrl' },
        { provide: ToastrService, useValue: instance(mockedToast) },
        {
          provide: ActivatedRoute, useValue: {
            params: of({ update: 'false' })
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

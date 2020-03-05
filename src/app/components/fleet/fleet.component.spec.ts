import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mock, instance } from 'ts-mockito';
import { BsModalService } from 'ngx-bootstrap';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FleetComponent } from './fleet.component';

describe('FleetComponent', () => {
  let component: FleetComponent;
  let fixture: ComponentFixture<FleetComponent>;
  const mocked = mock(BsModalService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FleetComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: BsModalService, useValue: instance(mocked) },
        { provide: 'VEHICLE_URL', useValue: 'testeUrl' },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

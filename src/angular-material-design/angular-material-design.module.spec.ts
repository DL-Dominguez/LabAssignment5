import { AngularMaterialDesignModule } from './angular-material-design.module';

describe('AngularMaterialDesignModule', () => {
  let angularMaterialDesignModule: AngularMaterialDesignModule;

  beforeEach(() => {
    angularMaterialDesignModule = new AngularMaterialDesignModule();
  });

  it('should create an instance', () => {
    expect(angularMaterialDesignModule).toBeTruthy();
  });
});

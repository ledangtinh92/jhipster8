import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b1dd6e3c-4f51-4a20-899f-6e71ff03d66e',
};

export const sampleWithPartialData: IAuthority = {
  name: 'cd2a38a9-66bb-4f81-8808-6608e98503c7',
};

export const sampleWithFullData: IAuthority = {
  name: '0738618c-7856-46ce-98d6-95762f6a59a1',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

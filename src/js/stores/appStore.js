import {observable} from 'mobx';

class AppStore {
  @observable name = 'Michał';
}

export default new AppStore();
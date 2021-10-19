import Route from '@ember/routing/route';
import { Changeset } from 'ember-changeset';
import { isChangeset } from 'validated-changeset';

export default class IndexRoute extends Route {
  model() {
    const changeset = Changeset({});
    const ischst = isChangeset(changeset);
    return ischst;
  }
}
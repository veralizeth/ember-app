import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
    // How a constrictor look like
    // constructor(...args){
    //     super(...args);
    //     this.isLarge = false;
    // }

    @tracked isLarge = false;

    @action toggleSize(){
        this.isLarge = !this.isLarge;
    }
}

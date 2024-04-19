import { Definition } from './definition';

export class Glossary {
  showAll: string = '';
  search: string = '';
  prev: string = '';
  next: string = '';
  infoTemplate: string = '';
  lengthTemplate: string = '';
  definitions: Definition[] = [];
}

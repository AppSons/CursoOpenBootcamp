import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class AttrDirective {

  @Input() defaultColor = '';
  @Input('appHighLight') highLightColor = '';

  constructor(private _elementRef: ElementRef) { }

  //Comportamiento para Mouse Enter en componente
  @HostListener('mouseenter') onMouseEnter() {
    this._cambiarColor(this.highLightColor || this.defaultColor || 'tomato');
  }
  //Comportamiento para Mouse Leave en componente
  @HostListener('mouseleave') onMouseLeave() {
    this._cambiarColor(null); //Quitamos color de fondo
  }
  /**
   * Método encargado de cambiar el color de fondo de un componente 
   * @param color Color para el fonde del componente
   */
  private _cambiarColor(color: string | null){
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

}

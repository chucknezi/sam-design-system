// import {
//   Directive,
//   AfterViewInit,
//   ElementRef,
//   Renderer2,
//   Input
// } from '@angular/core';

// @Directive({
//   selector: 'a[href]'
// })
// export class ExternalLinkDirective
//   implements AfterViewInit {
  
//   @Input() public hideIcon: boolean = false;

//   private get hasExternalIcon (): boolean {
//     //console.log(this.el.nativeElement.querySelectorAll('.sds-external-link'));
//     return this.el.nativeElement
//       .querySelectorAll('.fa-external-link')
//       .length > 0;
//   }

//   private get canRenderIcon (): boolean {
//     return !(this.hasExternalIcon || this.hideIcon);
//   }

//   constructor (
//     private el: ElementRef,
//     private renderer: Renderer2) {}

//   public ngAfterViewInit () {

//     if (this.canRenderIcon) {
//       this.renderIcon();
//     }

//     this.render(this.createSrText());
//   }

//   private render (el): void {
//     this.renderer.appendChild(
//       this.el.nativeElement,
//       el
//     );
//   }

//   private renderIcon (): void {
//     this.render(this.createSpace());
//     this.render(this.createIcon());
//   }

//   private createSpace (): HTMLSpanElement {
//     const space = this.renderer.createElement('span');
//     space.innerText = " ";
//     space.setAttribute('aria-hidden', true);

//     return space;
//   }

//   private createIcon (): HTMLSpanElement {
//     const icon = this.renderer.createElement('span');
//     icon.classList.add('fa', 'fa-external-link', 'fa-sm');
//     icon.setAttribute('aria-hidden', true);

//     return icon;
//   }

//   private createSrText (): HTMLSpanElement {
//     const span = this.renderer.createElement('span');
//     span.innerText = ' (opens in new window)';
//     span.classList.add('usa-sr-only');
    
//     return span;
//   }

// }



import {
  Directive,
  AfterViewChecked,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: 'a[href]'
})
export class ExternalLinkDirective
  implements AfterViewChecked {
  
  @Input() href: string;
  @Input() public hideIcon: boolean = false;

  private get hasExternalIcon (): boolean {
      console.log(this.el.nativeElement.querySelectorAll('.sds-external-link'));
    return this.el.nativeElement
      .querySelectorAll('.sds-external-link')
      .length > 0;
  }

  private get canRenderIcon (): boolean {
    return !(this.hasExternalIcon || this.hideIcon);
  }

  private get isExternalLink (): boolean {
    return this.href.replace(/^https?:\/\//,'').replace(/^www\./, '').split('/')[0] != location.hostname;
  }

  constructor (
    private el: ElementRef,
    private renderer: Renderer2) {}

  
    public ngAfterViewChecked () {
    
    if (!this.isExternalLink){
      return;
    }

    if (this.canRenderIcon) {
      this.renderIcon();
    }

  }

  private render (el): void {
    //console.log(el);
    //console.log(this.el);
    this.renderer.appendChild(
      this.el.nativeElement,
      el
    );
  }

  private renderIcon (): void {
    this.render(this.createIcon());
  }

  private createIcon1 (): HTMLSpanElement {
    const icon = this.renderer.createElement('span');
    icon.classList.add('fa', 'fa-external-link', 'fa-sm');
    icon.setAttribute('aria-hidden', true);

    return icon;
  }

  // private createIcon (): HTMLSpanElement {
    
  //   const icon = this.renderer.createElement('img');
  //   icon.classlist.add('sds-external-link');
  //   //icon.classList.add('fa', 'fa-external-link');
  //   //"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
  //   icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8zMzMpKSmFhYWBgYEtLS0WFhYlJSXq6uoQEBATExOtra3IyMgXFxenp6eqqqpiYmIAAABdXV2+vr4eHh7ExMTMzMzw8PALCwvh4eG1tbVaWlq4uLidnZ18fHxUVFTZ2dlBQUFMTEx0dHSUlJTELx43AAAEI0lEQVR4nO2d7XbaMAyGPSgEApQxCAP6Qdf1/q9xx6Ws4SOJJAtX6nmf39T06ataxE5wCAAAAAAAAAAAAAAAAAAAAAAAAADwyah66pN4/t04xDNtBAJ3E22/5X64KnokFqPGUaoFbYhuVs+6ftv9bPCDyrDZMEzH5GHa6d2pCi4Zfu2GoSotGj5uWG/eahimvMGyGL4w/+zthqEamjP8wynRbkOdFDUNdyvmm3cZhunMluErM8Juw1Clp6houGVPft2GYZo8oyoasouUYpjeFxUN+z3um5cEw+QUFQ3v6oYDygeqDcUwTNOaxo0MB2qjhtSm4cEwrWm4MExK0YdhSopODBNS9GIY1tIZ1Y2huC/6MQxrmaIjQ2Hr92QY1pLpxpWhqGn4MpSk6MwwrNkpejPkt353huzW788wrHlX2g4N58U3N7z/7lV6z12Z8mbITdCdITtBb4b3gssLV4ZzyeqwJ0NBifoylJSoK0NZgo4M+W3CmaE0QTeG4gS9GIrahCdD4SzqxzAlQReG8knGieHc5i63niEpwaJlYcO64ZzSJspdyyKjcUPSJDOehLBufKFtQ1KjL99vAm5M0bQhOcFIU4qWDUmNvtwdX96QomFDVoKR6ynaNSS1ifGu/iNXUzRrSGr05dmTBtc2wq0aChKMXFE0akhr9FeeFbksVJuG7Enmk4vpxqShOMHIeYoWDSfyBCNnu8QGDWmNvuV5rdM7NuwZJiYYOUnRnCGtTXQ8cVff67dmOEkt0QO12/yMGSa0iVM+W78tw6Q2ccr/2/xMGaolGDneIGbJUDHByEfTMGSommDk0DQMGT4Q7gSiJxh5T9GQYfjVqchJMBJTtGQYfnYocgXfZ1RThh0p8kr0wLS0ZdiaIj/ByHRhy7BFUZJgpPor/V0u0Pnk3VSosgQjpIccSShdPV1PUZqgKlpXwNdSHM/Vfs0E1FYxLlM0kaDmStR5ijYSVF1NPE1RPskoo7kiXE+xNJKg8qr+Z4pmEtTemTkq2klQfXftUKiGEtTfIY0pGmkTH6jvcv8qrLSJD/TvVHiwJZjtuaevA4b+gaF/YOgfGPoHhv6BYU5GNRq/jpmNJcNNOTyysLaqr0Pte0aN7T1pAUMZMMwJDGXAMCcwlAHDnMBQBgxzAkMZMMwJDGXAMCcwlAHDnMBQBgxzAkMZMMwJDGXAMCcwlAHDnMBQxvc3PDnhkXT+4c2oH4ja66sZvvFO1shF8aZmuGSfQ5qF1VLNcKR0kLYylONcqey55wHnYLDXEwyPFst0plekgX8udwYGr5qC4UXlMHRVZltVw7DTOdJej41qjUYeZ5YKdaD7T3hg+2rGcTDbKzaKGsv9cFV86We2SLEaPlQ38YuMqqf+V/NU3SY/AAAAAAAAAAAAAAAAAAAAAAAAANyef+tvRQpf7JBpAAAAAElFTkSuQmCC";
  //   icon.title = "This is an external link";
  //   return icon;

  // }
  private createIcon (): HTMLSpanElement {
    const icon = this.renderer.createElement('img');
    icon.classList.add('sds-external-link');
    //icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8zMzMpKSmFhYWBgYEtLS0WFhYlJSXq6uoQEBATExOtra3IyMgXFxenp6eqqqpiYmIAAABdXV2+vr4eHh7ExMTMzMzw8PALCwvh4eG1tbVaWlq4uLidnZ18fHxUVFTZ2dlBQUFMTEx0dHSUlJTELx43AAAEI0lEQVR4nO2d7XbaMAyGPSgEApQxCAP6Qdf1/q9xx6Ws4SOJJAtX6nmf39T06ataxE5wCAAAAAAAAAAAAAAAAAAAAAAAAADwyah66pN4/t04xDNtBAJ3E22/5X64KnokFqPGUaoFbYhuVs+6ftv9bPCDyrDZMEzH5GHa6d2pCi4Zfu2GoSotGj5uWG/eahimvMGyGL4w/+zthqEamjP8wynRbkOdFDUNdyvmm3cZhunMluErM8Juw1Clp6houGVPft2GYZo8oyoasouUYpjeFxUN+z3um5cEw+QUFQ3v6oYDygeqDcUwTNOaxo0MB2qjhtSm4cEwrWm4MExK0YdhSopODBNS9GIY1tIZ1Y2huC/6MQxrmaIjQ2Hr92QY1pLpxpWhqGn4MpSk6MwwrNkpejPkt353huzW788wrHlX2g4N58U3N7z/7lV6z12Z8mbITdCdITtBb4b3gssLV4ZzyeqwJ0NBifoylJSoK0NZgo4M+W3CmaE0QTeG4gS9GIrahCdD4SzqxzAlQReG8knGieHc5i63niEpwaJlYcO64ZzSJspdyyKjcUPSJDOehLBufKFtQ1KjL99vAm5M0bQhOcFIU4qWDUmNvtwdX96QomFDVoKR6ynaNSS1ifGu/iNXUzRrSGr05dmTBtc2wq0aChKMXFE0akhr9FeeFbksVJuG7Enmk4vpxqShOMHIeYoWDSfyBCNnu8QGDWmNvuV5rdM7NuwZJiYYOUnRnCGtTXQ8cVff67dmOEkt0QO12/yMGSa0iVM+W78tw6Q2ccr/2/xMGaolGDneIGbJUDHByEfTMGSommDk0DQMGT4Q7gSiJxh5T9GQYfjVqchJMBJTtGQYfnYocgXfZ1RThh0p8kr0wLS0ZdiaIj/ByHRhy7BFUZJgpPor/V0u0Pnk3VSosgQjpIccSShdPV1PUZqgKlpXwNdSHM/Vfs0E1FYxLlM0kaDmStR5ijYSVF1NPE1RPskoo7kiXE+xNJKg8qr+Z4pmEtTemTkq2klQfXftUKiGEtTfIY0pGmkTH6jvcv8qrLSJD/TvVHiwJZjtuaevA4b+gaF/YOgfGPoHhv6BYU5GNRq/jpmNJcNNOTyysLaqr0Pte0aN7T1pAUMZMMwJDGXAMCcwlAHDnMBQBgxzAkMZMMwJDGXAMCcwlAHDnMBQBgxzAkMZMMwJDGXAMCcwlAHDnMBQxvc3PDnhkXT+4c2oH4ja66sZvvFO1shF8aZmuGSfQ5qF1VLNcKR0kLYylONcqey55wHnYLDXEwyPFst0plekgX8udwYGr5qC4UXlMHRVZltVw7DTOdJej41qjUYeZ5YKdaD7T3hg+2rGcTDbKzaKGsv9cFV86We2SLEaPlQ38YuMqqf+V/NU3SY/AAAAAAAAAAAAAAAAAAAAAAAAANyef+tvRQpf7JBpAAAAAElFTkSuQmCC";
    icon.src = "./external-link.svg";
    icon.title = "This is an external link";
    return icon;
  }

}

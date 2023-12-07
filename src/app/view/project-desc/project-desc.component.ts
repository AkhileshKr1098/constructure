import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-project-desc',
  templateUrl: './project-desc.component.html',
  styleUrls: ['./project-desc.component.css']
})
export class ProjectDescComponent {
  modalInfo = [
    {
      id: 1,
      title: "Project 1",
      info: "...",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Project 2",
      info: "...",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Project 3",
      info: "...",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Project 4",
      info: "....",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Project 5",
      info: "...",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Project 6",
      info: "...",
      link: "#",
      github: "#"
    }
  ]
    ;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    // Initialization code goes here
  }

  openModal(id: number): void {
    const project = this.el.nativeElement.querySelector(`#${id}`);
    const img = project.querySelector('img').src;
    this.fillOut(id, img);
    const modal = this.el.nativeElement.querySelector('#preview');
    modal.style.display = "block";
    const modalContent = this.el.nativeElement.querySelector('.modal-content');
    this.renderer.addClass(modalContent, 'scale');
  }

  fillOut(id: number, img: string): void {
    const titleElement = this.el.nativeElement.querySelector("#title");
    // titleElement.innerHTML = this.modalInfo[id].title;

    const infoElement = this.el.nativeElement.querySelector("#info");
    // infoElement.innerHTML = this.modalInfo[id].info;

    const imgElement = this.el.nativeElement.querySelector("#img");
    imgElement.src = img;

    const liveButton = this.el.nativeElement.querySelector("#live");
    liveButton.onclick = () => {
      // window.open(this.modalInfo[id].link, '_blank');
    };

    const githubButton = this.el.nativeElement.querySelector("#github");
    githubButton.onclick = () => {
      // window.open(this.modalInfo[id].github, '_blank');
    };
  }

  closeModal(): void {
    const modal = this.el.nativeElement.querySelector('#preview');
    modal.style.display = "none";
  }

  outsideModalClick(event: Event): void {
    const modal = this.el.nativeElement.querySelector('#preview');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

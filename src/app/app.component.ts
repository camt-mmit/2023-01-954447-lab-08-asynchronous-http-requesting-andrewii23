import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MouseFollower from 'mouse-follower';
import LocomotiveScroll from 'locomotive-scroll';
// import { MatButtonModule } from '@angular/material/icon';

gsap.registerPlugin(ScrollTrigger);

declare const particlesJS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'my-api-app';

  @ViewChild('header', { static: true }) header!: ElementRef<HTMLElement>;
  @ViewChild('mainTitle', { static: true }) mainTitle!: ElementRef<HTMLElement>;
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;
  @ViewChild('navList', { static: true }) navList!: ElementRef<HTMLElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const containerElement = document.querySelector('[data-scroll-container]');

    if (containerElement) {
      const scroll = new LocomotiveScroll({
        el: containerElement as HTMLElement,
        smooth: true,
      });
    } else {
      console.error('The container element was not found.');
    }

    const cursor = new MouseFollower({
      container: this.document.body,
      speed: 0.6,
    });
    this.initialAnimations();
  }
  initialAnimations(): void {
    gsap.from(this.mainTitle.nativeElement, {
      y: '100vh',
      duration: 3,
      scale: 15,
      onComplete: () => {
        // Start floating animation after zoom out
        gsap.to(this.mainTitle.nativeElement, {
          y: '10px', // Adjust the desired floating distance
          duration: 1,
          scale: 1,
          repeat: -1, // Infinite repeat
          yoyo: true, // Reverse the animation to create the floating effect
          ease: 'power1.inOut', // Easing function for smooth motion
        });
      },
    });

    gsap.from(this.container.nativeElement, {
      y: 20,
      duration: 2,
      opacity: 0,
      delay: 3,
    });
    gsap.from(this.navList.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 3,
    });
  }

  ngAfterViewInit() {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 355,
          density: {
            enable: true,
            value_area: 789.1476416322727,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.48927153781200905,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 83.91608391608392,
            size: 1,
            duration: 3,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
}

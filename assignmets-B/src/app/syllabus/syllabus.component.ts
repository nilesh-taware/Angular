import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SafePipe } from '../safe.pipe';
@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './syllabus.component.html',
  styleUrl: './syllabus.component.css'
})
export class SyllabusComponent {
  pdfSrc: string = 'assets/JGU_MCA.pdf';

}

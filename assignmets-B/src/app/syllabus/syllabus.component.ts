import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './syllabus.component.html',
  styleUrl: './syllabus.component.css'
})
export class SyllabusComponent {
  pdfUrl:string='//assignmets-B/src/assets/JGU_MCA (2).pdf';
  // // Path to the PDF file in the assets folder
  // pdfSource: SafeResourceUrl;

  // constructor(private sanitizer: DomSanitizer) {
  //   // Mark the PDF URL as safe
  //   this.pdfSource = this.sanitizer.bypassSecurityTrustResourceUrl('//assignmets-B/src/assets/JGU_MCA (2).pdf');
  // }
}

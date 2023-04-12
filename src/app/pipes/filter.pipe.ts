import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../models/Job';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(jobsList: Job[], tags: string[]): Job[] {
    if(!tags || !tags.length) return jobsList;
    return jobsList.filter(job => {
      return tags.every(tag => 
        job.role === tag ||
        job.level === tag ||
        job.languages.some(l => l === tag) ||
        job.tools.some(t => t === tag)
      )
    });
  }

}

import { BehaviorSubject, Observable } from "rxjs";

export abstract class BaseFacade<T = any> {
  private store = new BehaviorSubject<T[]>([])
  public readonly data$: Observable<T[]> = this.store.asObservable()
  
  public get data(): any {
    return this.store.value
  }
  
  protected addData(payload: T | T[]): void {
    let exitingData = this.store.value;
    if(Array.isArray(payload)) {
      exitingData = exitingData.concat(payload)
    } else {
      exitingData.push(payload)
    }
    this.store.next(exitingData)
  }
  
  abstract loadData(): void
}
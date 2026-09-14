import type { Model, Task } from "./model.js";

export class ModelZoo {
  private readonly models = new Map<string, Model>();

  addModel(model: Model): void {
    this.models.set(model.id, model);
  }

  getTotalNumberOfModels(): number {
    return this.models.size;
  }

  getAllModels(): Model[] {
    return Array.from(this.models.values());
  }

  getModel(id: string): Model | undefined {
    return this.models.get(id);
  }

  getModelsOf(org: string): Model[] {
  return Array.from(this.models.values()).filter(
    (model) => model.org === org
  );
}
  getModelsByTask(task: Task): Model[] {
  return Array.from(this.models.values()).filter(
    (model) => model.task === task
  );
}
}
import { Category } from '.';

let category;

beforeEach(async () => {
  category = await Category.create({
    type: 'test',
    name: 'test',
    description: 'test',
    slug: 'test',
    status: 'test',
  });
});

describe('view', () => {
  it('returns simple view', () => {
    const view = category.view();
    expect(typeof view).toBe('object');
    expect(view.id).toBe(category.id);
    expect(view.type).toBe(category.type);
    expect(view.name).toBe(category.name);
    expect(view.description).toBe(category.description);
    expect(view.slug).toBe(category.slug);
    expect(view.status).toBe(category.status);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });

  it('returns full view', () => {
    const view = category.view(true);
    expect(typeof view).toBe('object');
    expect(view.id).toBe(category.id);
    expect(view.type).toBe(category.type);
    expect(view.name).toBe(category.name);
    expect(view.description).toBe(category.description);
    expect(view.slug).toBe(category.slug);
    expect(view.status).toBe(category.status);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });
});

import { Product } from '.';

let product;

beforeEach(async () => {
  product = await Product.create({ name: 'test', description: 'test' });
});

describe('view', () => {
  it('returns simple view', () => {
    const view = product.view();
    expect(typeof view).toBe('object');
    expect(view.id).toBe(product.id);
    expect(view.name).toBe(product.name);
    expect(view.description).toBe(product.description);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });

  it('returns full view', () => {
    const view = product.view(true);
    expect(typeof view).toBe('object');
    expect(view.id).toBe(product.id);
    expect(view.name).toBe(product.name);
    expect(view.description).toBe(product.description);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });
});

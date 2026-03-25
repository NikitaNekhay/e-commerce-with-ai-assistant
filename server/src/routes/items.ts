import { Router, Request, Response } from 'express';
import { items } from '../data';
import { computeNeedsRevision, getMissingFields } from '../utils';
import { Category, Item, ItemUpdateIn } from '../types';

const router = Router();

// GET /items - list items with filtering, sorting, pagination
router.get('/', (req: Request, res: Response) => {
  let filtered = [...items];

  // Search by title
  const q = req.query.q as string | undefined;
  if (q) {
    const searchLower = q.toLowerCase();
    filtered = filtered.filter(item =>
      item.title.toLowerCase().includes(searchLower)
    );
  }

  // Filter by categories (comma-separated)
  const categoriesParam = req.query.categories as string | undefined;
  if (categoriesParam) {
    const categories = categoriesParam.split(',') as Category[];
    filtered = filtered.filter(item => categories.includes(item.category));
  }

  // Filter by needsRevision
  const needsRevisionParam = req.query.needsRevision as string | undefined;
  if (needsRevisionParam === 'true') {
    filtered = filtered.filter(item => computeNeedsRevision(item));
  }

  // Total after filtering, before pagination
  const total = filtered.length;

  // Sorting
  const sortColumn = req.query.sortColumn as string | undefined;
  const sortDirection = req.query.sortDirection as 'asc' | 'desc' | undefined;

  if (sortColumn) {
    const dir = sortDirection === 'asc' ? 1 : -1;

    filtered.sort((a, b) => {
      switch (sortColumn) {
        case 'title':
          return dir * a.title.localeCompare(b.title, 'ru');
        case 'createdAt':
          return dir * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        case 'price':
          return dir * (a.price - b.price);
        default:
          return 0;
      }
    });
  } else {
    // Default sort: newest first
    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  // Pagination
  const skip = parseInt(req.query.skip as string) || 0;
  const limit = parseInt(req.query.limit as string) || filtered.length;
  const paginated = filtered.slice(skip, skip + limit);

  // Map to list entry format
  const responseItems = paginated.map(item => ({
    id: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    needsRevision: computeNeedsRevision(item),
  }));

  res.json({ items: responseItems, total });
});

// GET /items/:id - get single item
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(String(req.params.id));
  const item = items.find(i => i.id === id);

  if (!item) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  const responseItem = {
    ...item,
    needsRevision: computeNeedsRevision(item),
  };

  res.json({ items: [responseItem], total: 1 });
});

// PUT /items/:id - update item
router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(String(req.params.id));
  const index = items.findIndex(i => i.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  const updateData: ItemUpdateIn = req.body;

  // Validate required fields
  if (!updateData.category || !updateData.title || updateData.price === undefined) {
    res.status(400).json({ error: 'Missing required fields: category, title, price' });
    return;
  }

  // Validate category
  const validCategories: Category[] = ['auto', 'real_estate', 'electronics'];
  if (!validCategories.includes(updateData.category)) {
    res.status(400).json({ error: 'Invalid category' });
    return;
  }

  // Update item in-memory
  const existingItem = items[index];
  const updatedItem: Item = {
    ...existingItem,
    category: updateData.category,
    title: updateData.title,
    description: updateData.description,
    price: updateData.price,
    params: updateData.params || {},
    updatedAt: new Date().toISOString(),
  };

  items[index] = updatedItem;

  const responseItem = {
    ...updatedItem,
    needsRevision: computeNeedsRevision(updatedItem),
  };

  res.json({ items: [responseItem], total: 1 });
});

export default router;

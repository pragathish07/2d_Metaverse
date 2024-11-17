import { Router } from 'express';
import { UserRouter } from './user';
import { AdminRouter } from './admin';
import { SpaceRouter } from './space';

export const router = Router();

router.post('/signup', (req, res) => {
  res.json({message:'signup route'});
});

router.post('/login', (req, res) => {
  res.send('login route');
});

router.get('/elements', (req, res) => { 
  res.send('elements route');
} );

router.get('/avatars', (req, res) => {
  res.send('avatars route');
});


router.use('/users', UserRouter);
router.use('/admin', AdminRouter);
router.use('/spaces', SpaceRouter);






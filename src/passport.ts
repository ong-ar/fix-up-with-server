import passport from "passport";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma/prisma-client";
import dotenv from "dotenv";

dotenv.config();

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const strategy = new Strategy(options, async (payload, done) => {
  const user = await prisma.user({ id: payload.id });
  return done(null, user);
});

export const authenticateJwt = (req: any, res: Response, next: NextFunction) =>
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

export const signJwt = (id: any) =>
  jwt.sign({ id }, process.env.JWT_SECRET as any);

passport.use(strategy);
passport.initialize();

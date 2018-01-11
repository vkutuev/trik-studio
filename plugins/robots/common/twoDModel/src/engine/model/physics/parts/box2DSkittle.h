/* Copyright 2017 CyberTech Labs Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */
#pragma once

class b2Body;

namespace twoDModel{
namespace items {
	class SkittleItem;
}

namespace model {
namespace physics {
	class box2DPhysicsEngine;

namespace parts {

class box2DSkittle
{
public:
	b2Body *body; // Take ownership
	twoDModel::items::SkittleItem &item; // Doesn't take ownership
	twoDModel::model::physics::box2DPhysicsEngine &engine; // Doesn't take ownership

	box2DSkittle(twoDModel::model::physics::box2DPhysicsEngine *engine
			, twoDModel::items::SkittleItem &skittleItem);

	~box2DSkittle();
};

}
}
}
}

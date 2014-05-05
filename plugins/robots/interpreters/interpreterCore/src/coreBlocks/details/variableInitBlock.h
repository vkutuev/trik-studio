#pragma once

#include <interpreterBase/blocksBase/block.h>

namespace interpreterCore {
namespace coreBlocks {
namespace details {

class VariableInitBlock : public interpreterBase::blocksBase::Block
{
	Q_OBJECT

public:
	void run() override;
};

}
}
}

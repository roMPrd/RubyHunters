class SolutionPolicy < ApplicationPolicy
  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve

      # record.bounty.user == user ? scope.where(bounty: record.bounty) : scope.where(user: record.user)
    end
  end

  def show?
    true
  end

  def create?
    true
  end

  def update?
    record.user == user
  end

  def destroy?
    record.user == user
  end

  def custom?
    record.bounty.user = user
  end
end
